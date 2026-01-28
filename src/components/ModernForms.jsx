import { useState } from 'react';

/**
 * Modern Input Component
 */
export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
  icon = null,
  ...props
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${icon ? 'pl-12' : 'px-4'} py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
          }`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 mt-2 flex items-center gap-1">
          <span>✕</span> {error}
        </p>
      )}
    </div>
  );
}

/**
 * Modern Select Component
 */
export function Select({
  label,
  options,
  value,
  onChange,
  error,
  required,
  placeholder = 'Select an option...',
  ...props
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
        }`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 mt-2 flex items-center gap-1">
          <span>✕</span> {error}
        </p>
      )}
    </div>
  );
}

/**
 * Modern Textarea Component
 */
export function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  required,
  rows = 4,
  ...props
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none resize-none ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
        }`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 mt-2 flex items-center gap-1">
          <span>✕</span> {error}
        </p>
      )}
    </div>
  );
}

/**
 * Modern Checkbox Component
 */
export function Checkbox({
  label,
  checked,
  onChange,
  error,
  disabled = false,
  ...props
}) {
  return (
    <div className="mb-4">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 accent-primary-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          {...props}
        />
        <span className="text-gray-700 dark:text-gray-300 font-medium">{label}</span>
      </label>
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 mt-2 flex items-center gap-1 ml-8">
          <span>✕</span> {error}
        </p>
      )}
    </div>
  );
}

/**
 * Modern Radio Group Component
 */
export function RadioGroup({ label, options, value, onChange, required, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 accent-primary-500 cursor-pointer transition-colors"
              {...props}
            />
            <span className="text-gray-700 dark:text-gray-300 font-medium">{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 mt-2 flex items-center gap-1">
          <span>✕</span> {error}
        </p>
      )}
    </div>
  );
}

/**
 * Modern Form Component
 */
export function Form({ onSubmit, children, className = '', ...props }) {
  return (
    <form onSubmit={onSubmit} className={className} {...props}>
      {children}
    </form>
  );
}
